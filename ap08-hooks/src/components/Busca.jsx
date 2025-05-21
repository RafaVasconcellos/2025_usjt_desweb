import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';

const Busca = () => {
  return (
    <div>
      <IconField iconPosition="left">
        <InputIcon className="pi pi-search" />
        <InputText />
      </IconField>
    </div>
  )
}

export default Busca