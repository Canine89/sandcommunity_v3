'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await fetch('http://localhost:8000/book/').then((res) => {
      return res.json();
    });
    const initData = res.slice(0, 20).map((data) => {
      return data;
    });
    setData(initData);
    console.log(initData);
  };

  useEffect(() => {
    getData();
  }, []);
}
