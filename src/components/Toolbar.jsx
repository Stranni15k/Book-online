export default function Toolbar(props) {
    function add() {
        props.onAdd();
    }

    return (
        <div className="btn-group mt-2" role="group">
            <button type="button" className={`btn btn-succes`} onClick={add}>
                Добавить
            </button>
        </div >
    );
}