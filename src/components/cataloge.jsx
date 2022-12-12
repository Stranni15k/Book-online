import { useState, useEffect } from "react";
import Toolbar from "../components/Toolbar";
import Card from "../components/Card";
import Modal from "../components/Modal";
import DataService from '../service/DataService';

export default function Catalog(props) {
    const [items, setItems] = useState([]);

    const [modalHeader, setModalHeader] = useState('');
    const [modalConfirm, setModalConfirm] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const [isEdit, setEdit] = useState(false);
    
    useEffect(() => {
        loadItems();
    }, []);

    function loadItems() {
        DataService.readAll(props.url, props.transformer)
            .then(data => setItems(data));
    }

    function saveItem() {
        if (!isEdit) {
            DataService.create(props.url, props.data).then(() => loadItems());
        } else {
            DataService.update(props.url + props.data.id, props.data).then(() => loadItems());
        }
    }

    function handleAdd() {
        setEdit(false);
        setModalHeader('Добавление элемента');
        setModalConfirm('Добавить');
        setModalVisible(true);
        props.onAdd();
    }

    function handleEdit(id) {
        edit(id);
    }

    function handleDescription(id) {
        description(id);
    }

    function edit(editedId) {
        DataService.read(props.url + editedId, props.transformer)
            .then(data => {
                setEdit(true);
                setModalHeader('Редактирование элемента');
                setModalConfirm('Сохранить');
                setModalVisible(true);
                props.onEdit(data);
            });
    }

    function description(editedId) {
        DataService.read(props.url + editedId, props.transformer)
            .then(data => {
                setEdit(true);
                setDescModalHeader(data.title);
                setDescModalVisible(true);
                props.onDescription(data);
            });
    }

    function handleRemove(id, e) {
        if (confirm('Удалить выбранные элементы?')) {
            DataService.delete("lines/"+id)
            .then(()=>{loadItems()})

        }
    }

    function handleModalHide() {
        setModalVisible(false);
    }

    function handleModalDone() {
        saveItem();
    }

    return (
        <>
            <Toolbar 
                onAdd={handleAdd}
                />
            <Card 
                items={items}
                onEdit={handleEdit}
                onRemove={handleRemove}/>
            <Modal 
                header={modalHeader}
                confirm={modalConfirm}
                visible={modalVisible} 
                onHide={handleModalHide}
                onDone={handleModalDone}>
                    {props.children}
            </Modal>
        </>
    );
}