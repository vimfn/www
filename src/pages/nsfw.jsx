export default function Nsfw() {
    return (
        <div className="nsfw">
            {/* <h1 className="text-rose text-3xl font-bold tracking-wide md:text-4xl sm:leading-10 md:leading-14 ">NSFW</h1> */}
            {/* <p className="flex items-center transition-all text-subtle">This page is NSFW. Please be 18+ to view this page.</p> */}
            {/* <button className="font-medium h-8 bg-pine dark:text-white rounded w-28">   I am 18+ </button> */}
            <div className='button w-40 h-16 bg-blue-500 rounded-lg cursor-pointer select-none
    active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
    active:border-b-[0px]
    transition-all duration-150 [box-shadow:0_10px_0_0_#1b6ff8,0_15px_0_0_#1b70f841]
    border-b-[1px] border-blue-400
  '>
                <span className='flex flex-col justify-center items-center h-full text-white font-bold text-lg '>Active</span>
            </div>
            {/* do this on button click */}


        </div>
    );
}