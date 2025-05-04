
import { useEffect, useState } from "react";
import { WS_URL } from "../app/config";


export function useSocket() {
    const [loading, setLoading]= useState(true);
    const[socket, setSocket] = useState<WebSocket>();

    useEffect(() => {
        const ws = new WebSocket(`${WS_URL}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJiZTJhYmZmNC02MDJhLTQ4Y2YtOTNmOC0zOWVkZWZjNWUwMmIiLCJpYXQiOjE3NDYwMzE1OTR9.8ReUuOYCVyWmKrA4vZdcY3-4O4p0Fnt7ddZqbo_kCb0`);
        ws.onopen = () => {
            setLoading(false);
            setSocket(ws);
        }
    }, [])

    return {
        socket, 
        loading
    }
}