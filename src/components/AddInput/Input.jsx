import React, { useRef } from 'react';

const Input = ({ data, setData }) => {
    const TitleRef = useRef(null);
    const NumberRef = useRef(null);
    const CostRef = useRef(null);
    const SrokRef = useRef(null);

    const handleSubmit = (v) => {
        v.preventDefault();

        const Title = TitleRef.current.value.trim();
        const Number = NumberRef.current.value.trim();
        const Cost = CostRef.current.value.trim();
        const Srok = SrokRef.current.value.trim();

        if (!Title || !Number || !Cost || !Srok) {
            alert("Siz to'liq ma'lumot kiritmadingiz. Iltimos to'liq ma'lumot kiriting.");
            return;
        }

        const selectedYear = new Date(Srok).getFullYear();
        if (selectedYear < 2024) {
            alert("Mahsulot muddati 2024 yildan kichik. Iltimos yaroqlilik muddatini to'g'ri kiriting.");
            SrokRef.current.value = '';
            return;
        }


        const newData = [...data, {
            id: data.length + 1,
            title: Title,
            type: Number,
            cost: Cost,
            srok: Srok
        }];

        setData(newData);

        TitleRef.current.value = '';
        NumberRef.current.value = '';
        CostRef.current.value = '';
        SrokRef.current.value = '';
    };

    return (
        <form onSubmit={handleSubmit} className='flex justify-between items-center my-3 px-3'>
            <div className='w-[100%] mx-2'>
                <input ref={TitleRef} className='p-2 w-[100%] m-2 rounded-[10px] border-[2px]' placeholder='Mahsulot nomini kiriting...' type="text" />
            </div>
            <div className='w-[100%] mx-2'>
                <input ref={NumberRef} className='p-2 w-[100%] m-2 rounded-[10px] border-[2px]' placeholder='Mahsulot sonini kiriting [too kg]...' type="text" />
            </div>
            <div className='w-[100%] mx-2'>
                <input ref={CostRef} className='p-2 w-[100%] m-2 rounded-[10px] border-[2px]' placeholder='Mahsulot narxini kiriting...' type="text" />
            </div>
            <div className='w-[100%] mx-2'>
                <input ref={SrokRef} className='p-2 w-[100%] m-2 rounded-[10px] border-[2px]' placeholder='Mahsulot mudatini kiriting...' type="date" />
            </div>
            <button className='p-2 mx-2 border-[2px] border-[red] hover:border-[black] text-[18px] font-[700] hover:text-[red]  rounded-[8px] bg-slate-100 hover:bg-zinc-500'>
                Add
            </button>
        </form>
    );
}

export default Input;
