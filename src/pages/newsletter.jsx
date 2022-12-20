import Subscribe from "src/components/Subscribe";

export default function Newsletter() {
    return (
        <><div>    <h1 className="text-rose text-3xl font-bold tracking-wide md:text-4xl sm:leading-10 md:leading-14 ">Newsletter</h1>
            <p className="flex items-center mt-5 transition-all text-subtle">My newsletter provides a behind-the-scenes look into what I am working on and writing about.<br/>I frequently share some of my favorite articles I have read, as well as anything fascinating about technology.</p>
            {/* <div className="font-bold flex items-center mt-3"> 🎁 First 100 subscribers will get free access to some of my favourite coding assets and resources as a gift from me :D</div>  */}
        </div>
        <Subscribe />
        
        </>
      
    );
}