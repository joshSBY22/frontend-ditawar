import { useLoaderData } from "react-router-dom";
import client from "./client"
import {React, useEffect, useState} from "react";

export default function AuctionPage(){

    const data = useLoaderData();
    console.log(data);
    let item = data.itemdata;
    let auction = data.auctiondata;
    let url =import.meta.env.VITE_API_URL+'/static/'+item.images;
    let berakhir = new Date(data.auctiondata.tanggal_selesai);
    
    // console.log(data.auctiondata.tanggal_selesai);
    
    // console.log(berakhir)
    // console.log(url);

    console.log(item);
    console.log(auction);

    const [timer, setTimer] = useState("00:00:00");

    const getTimeRemaining = () => {
        const total =
            Date.parse(berakhir) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor(
            (total / 1000 / 60) % 60
        );
        const days = Math.floor(
            total / (1000 * 60 * 60 * 24)
        );
        const hours = Math.floor(
            (total / 1000 / 60 / 60) % 24
        ) + (days * 24); // Add remaining days in hours
        return {
            total,
            hours,
            minutes,
            seconds,
        };
    };

    const startTimer = () => {
        let { total, hours, minutes, seconds } =
            getTimeRemaining();
        if (total >= 0) {
            setTimer(
                (hours > 9 ? hours : "0" + hours) +
                    ":" +
                    (minutes > 9
                        ? minutes
                        : "0" + minutes) +
                    ":" +
                    (seconds > 9 ? seconds : "0" + seconds)
            );
        }
    };

    useEffect(() => {
        const interval = setInterval(startTimer, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="container-fluid p-5">
                <div className="row">
                    <h1>{item.nama}</h1>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <div className="container-fluid d-flex">
                                <h4>{item.deskripsi}</h4>
                            </div>
                            <img src={url} alt="Item Image" style={{maxHeight:"300px", maxWidth:"300px"}}/>
                            <br />
                            <div className="container-fluid d-flex">
                                <h4>Waktu Berakhir: {timer}</h4>
                            </div>
                            <div className="container-fluid d-flex">
                                <h4>Harga Penawaran: {auction.starting_price}</h4> 
                            </div>
                            <div className="container-fluid d-flex">
                                <h4>Beli Sekarang: {auction.asking_price}</h4>
                            </div>
                            <div className="container-fluid d-flex">
                                <button className="btn btn-primary rounded">Tawar</button>
                                <button className="btn btn-primary rounded">Beli Sekarang</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}