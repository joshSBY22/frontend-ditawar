
import React from 'react';
import client from './client';
import { useNavigate } from 'react-router';
const PurchasePageItemSeller = (props) => {

    let Rupiah = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR"
    });

    const navigate = useNavigate();

    const url = import.meta.env.VITE_API_URL + "/static/" + props.item.images || "";

    const markAsFinished = async () => {
        const token = localStorage.getItem("token");
        const result = await client.post(`/purchase/finish?id=${props._id}`, {
            token: token,
        });
        console.log(result.data);
        if(result.status == 201){
            alert("Pesanan ditandai selesai!")
            navigate(0);
        }
        else{
            alert("Terjadi kesalahan!")
        }
    }

    console.log(props)

    let isUpdateable = false;
    let isMarkable = false;

    let lastHistory = null;
    if(props.history.length > 0){
        lastHistory = props.history[props.history.length-1];
    }

    if(!lastHistory){
        isUpdateable = true;
        isMarkable = true;
    }
    else{
        console.log(lastHistory);
        if(lastHistory.status == "pending"){
            isUpdateable = true;
            isMarkable = true;
        }
        else if(lastHistory.status == "finished"){
            isUpdateable = false;
            isMarkable = false;
        }
    }

    return (
        <>
            <div className="card mb-3 mt-4" style={{ minHeight: "25vh", width: "60vw" }}>
                <div className="row g-0">
                    <div className="col-md-2 text-center pt-5">
                        <img src={url} className="img-fluid rounded-start" style={{ height: "10vh" }} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <p className="card-title" style={{ fontSize: "20px" }}>
                                {props.item.nama} 
                                <br /><p style={{fontSize: "15px"}}>transaction/{props.item._id}</p>
                                </p>
                            <div className="row mb-3">
                                <div className="col-6">
                                    <p className="card-text" style={{ fontSize: "20px" }}>Seller : {props.seller.nama}</p>
                                    
                                </div>
                                <div className="col-6 ">
                                    <p>Total :
                                    {Rupiah.format(props.transaction.invoice.amount)} <br /></p>
                                    <img src={location} alt="" style={{ width: "20px" }} className="ms-2" />{props.auctiondata.kecamatan+","+props.auctiondata.kota_kabupaten+","+props.auctiondata.provinsi}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col d-flex">
                                    {!isUpdateable && !isMarkable && <p>Purchase marked as Finished, waiting for Buyer to Confirm</p>}
                                    {isUpdateable && <button className="btn btn-success me-2" style={{ width: "100px" }}>Update</button>}
                                    {isMarkable && <button className="btn btn-primary" style={{ width: "100px" }} onClick={markAsFinished}>Mark as Finished</button>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PurchasePageItemSeller;
