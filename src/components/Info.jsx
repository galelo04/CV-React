import GeneralForm from "./generalform";
function Info({ setFormsData }) {


    return (<div className="info">
        <GeneralForm sendData={setFormsData}></GeneralForm>
    </div >);
}

export default Info