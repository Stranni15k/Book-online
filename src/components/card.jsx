import Description from "../pages/Description";
import { Link, Router } from 'react-router-dom';

export default function Card(props) {
    function edit(id) {
        props.onEdit(id);
    }

    function remove(id) {
        props.onRemove(id);
    }

    return (
        <div className="row">
                {props.items.map((item) => (
                <div className="col-md-3 mx-auto" id="tbl-items" style={{ marginBottom: 10 }}>    
                    <div className="container" key={item.id} id="card">
                            <img className="book-image rounded mx-auto d-block" src={item['imgsource']} style={{ width: 256, height: 380 }} />
                            <div className="book-type text-center">{item['price']}р.</div>
                            <Link to={"Description?id="+item.id} className="book-type text-center"><div>{item['title']}</div></Link>
                            <div className="book-desc text-center">{item['name']}</div>
                            <button type="button" className="btn btn-primary" style={{ backgroundColor: 'grey', borderColor: 'grey', marginLeft: 30 }} onClick={(e) => remove(item.id, e)}>Удалить</button>
                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{ backgroundColor: 'grey', borderColor: 'grey' }} onClick={(e) => edit(item.id, e)}>Редактировать</button>
                    </div>
                </div>
                ))}
        </div>
    );
}
