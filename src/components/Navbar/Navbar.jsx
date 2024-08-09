import React from 'react';

const Navbar = () => {
    return (
        <div className='flex items-center justify-between gap-2'>
            <div className='flex items-center gap-2'>
                <div className=''>
                    <img className='w-[50px]' src="../../svg&png&img/korzincka.svg" alt="Korzinka" />
                </div>
                <div className=''>
                    <h1 className='text-[47px] font-[800] text-[red]'>korzinka</h1>
                </div>
            </div>
            <div className=' w-[60%] flex items-center justify-between'>
                <div className='w-1/2 mx-auto'>
                    <img className='my-0 mx-[auto] p-2 hover:text-[red]' src="../../svg&png&img/katalog.svg" alt="" />
                    <p className='text-[16px] font-[600] text-center my-2  hover:text-[red]'>Каталог</p>
                </div>
                <div className='w-1/2 mx-auto'>
                    <img className='my-0 mx-[auto] p-2 hover:text-[red]' src="../../svg&png&img/lyanost.svg" alt="" />
                    <p className='text-[17px] font-[600] text-center my-2  hover:text-[red]'>Karta dasturi</p>
                </div>
                <div className='w-1/2 mx-auto'>
                    <img className='my-0 mx-[auto] p-2 hover:text-[red]' src="../../svg&png&img/korzinkago.svg" alt="" />
                    <p className='text-[17px] font-[600] text-center my-2  hover:text-[red]'>Korzinka Go</p>
                </div>
                <div className='w-1/2 mx-auto'>
                    <img className='my-0 mx-[auto] p-2 hover:text-[red]' src="../../svg&png&img/karera.svg" alt="" />
                    <p className='text-[17px] font-[600] text-center my-2  hover:text-[red]'>Karyera</p>
                </div>
                <div className='w-1/2 mx-auto'>
                    <img className='my-0 mx-[auto] p-2 hover:text-[red]' src="../../svg&png&img/o nac.svg" alt="" />
                    <p className='text-[17px] font-[600] text-center  hover:text-[red]'>Biz haqimizda</p>
                </div>
                <div className='w-1/2 mx-auto'>
                    <img className='my-0 mx-[auto] p-2 hover:text-[red]' src="../../svg&png&img/magazin.svg" alt="" />
                    <p className='text-[17px] font-[600] text-center my-2  hover:text-[red]'>Do'konlar</p>
                </div>
                <div className='w-1/2 mx-auto'>
                    <img className='my-0 mx-[auto] p-2 hover:text-[red]' src="../../svg&png&img/novosti.svg" alt="" />
                    <p className='text-[17px] font-[600] text-center my-2  hover:text-[red]'>Yangiliklar</p>
                </div>
                <div className='w-1/2 mx-auto'>
                    <img className='my-0 mx-[auto] p-2 hover:text-[red]' src="../../svg&png&img/yana.svg" alt="" />
                    <p className='text-[17px] font-[600] text-center my-2  hover:text-[red]'>Yana</p>
                </div>
            </div>
            <div className='flex text-center gap-3 items-center'>
                <a href="#">
                    <img src="../../svg&png&img/qidirish.svg" alt="" />
                </a>
                <form action="#">
                    <select className='rounded-[10px] p-2' id="language" name="language">
                        <option value="uzbek" selected>O'zbekcha</option>
                        <option value="russian">Русский</option>
                        <option value="english">English</option>
                    </select>
                </form>
            </div>
        </div>
    );
}

export default Navbar;
