import PhotoCard from "@/components/PhotoCard";

const AllPhotoPage = async () => {
    const res = await fetch('https://pixgen-project-wine.vercel.app/data.json');
    const photos = await res.json();
    return (
        <div>
            <h1 className="text-3xl font-bold m-4">All photo</h1>
            <div className="grid grid-cols-4 gap-5">
                {
                    photos.map(photo => <PhotoCard key={photo.id} photo={photo}></PhotoCard>)
                }
            </div>
        </div>
    );
};

export default AllPhotoPage;