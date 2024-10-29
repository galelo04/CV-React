function DisplayInfo({ data }) {

    // const dataArr = data.map(Element => {
    //     Element.map(el => {
    //         return <>el</>
    //     })
    // });
    data.map(el => console.log(el));
    console.log(data);

    return (
        <div className="displayInfo">
            <h1>Cv</h1>
            <div className="CvContents"></div>

        </div>
    )
}

export default DisplayInfo