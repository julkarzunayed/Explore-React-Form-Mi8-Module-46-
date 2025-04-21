import './App.css'
import ControlledField from './component/ControlledField/ControlledField';
import FamilyTree from './component/FamilyTree/FamilyTree';
import FormAction from './component/FormAction/FormAction';
import HookControlledField from './component/HookControlledField/HookControlledField';
import ProductManagement from './component/ProductManagement/ProductManagement';
import SimpleForm from './component/SimpleForm/SimpleForm';
import UnControlledField from './component/UnControlledField/UnControlledField';

function App() {

  

  return (
    <>
      <h1>Explore React Forme</h1>
      <SimpleForm></SimpleForm>
      <FormAction></FormAction>
      <ControlledField></ControlledField>
      <UnControlledField></UnControlledField>
      <HookControlledField></HookControlledField>
      <ProductManagement></ProductManagement>
      <FamilyTree></FamilyTree>
      
    </>
  )
}

export default App
