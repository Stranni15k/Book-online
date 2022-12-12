import { useState, useEffect } from "react";
import Catalog from "../components/cataloge";
import Product from "../models/lines";
import Header from "../components/header/Header"

export default function Menu(props) {
    const url = "lines/";
    const transformer = (data) => new Product(data);

    const [data, setData] = useState(new Product());

    function handleOnAdd() {
        setData(new Product());
    }

    function handleOnEdit(data) {
        setData(new Product(data));
    }

    function handleFormChange(event) {
        setData({ ...data, [event.target.id]: event.target.value });
    }
    const [imageURL, setImageURL] = useState();
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
        const tempval = fileReader.result
        setImageURL(tempval);
        setData({ ...data, ['imgsource']: tempval });
    };

    function handleOnChange(event) {
        event.preventDefault();
        const file = event.target.files[0];
        fileReader.readAsDataURL(file);
    }

    return (
        <main className="flex-shrink-0">
            <Header />
            <div className="container">
                <Catalog
                    url={url}
                    transformer={transformer}
                    data={data}
                    onAdd={handleOnAdd}
                    onEdit={handleOnEdit}
                >
                    <div id="div1">
                        <label className="form-label" htmlFor="imgsource"> Изображение </label>
                        <input className="form-control" id="imgsource" type="file" accept="image/jpeg, image/png, image/jpg" value='' onChange={handleOnChange}
                        />
                    </div>
                    <div id="div2">
                        <label className="form-label" id="namelems" htmlFor="title">Введите название книги:</label>
                        <input className="form-control" id="title" type="text" value={data.title} required onChange={handleFormChange} />
                    </div>
                    <div id="div3">
                        <label className="form-label" id="ageelem" htmlFor="price">Введите цену книги:</label>
                        <input className="form-control" id="price" type="text" value={data.price} required onChange={handleFormChange} />
                    </div>
                    <div id="div4">
                        <label className="form-label" id="sss" htmlFor="name">Введите имя автора книги:</label>
                        <input className="form-control" id="name" type="text" value={data.name} required onChange={handleFormChange} />
                        <div id="str" />
                    </div>
                </Catalog>
                <img id="imgsource" src={imageURL ? imageURL : "no_photo.jpg"} value={data.birthday} onChange={handleFormChange} style={{ display: "none" }} />
            </div>
        </main>
    );
}