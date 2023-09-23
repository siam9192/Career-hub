
const Category = ({category}) => {
    const {logo,category_name,availability} = category;
    return (
        <div className=" bg-gray-200 px-6 py-4 space-y-3 rounded-lg">
            <img src={logo} alt="" />
            <div className="">
                <h2 className="text-2xl text-black">{category_name}</h2>
                <p>{availability}</p>
            </div>
        </div>
    );
}

export default Category;
