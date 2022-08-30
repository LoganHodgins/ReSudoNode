import Button from "./Button";

const Numpad = () => {
  return (<div>
    <table>
      <tbody>
        <tr><Button value={'7'}/><Button value={'8'}/><Button value={'9'}/></tr>
        <tr><Button value={'4'}/><Button value={'5'}/><Button value={'6'}/></tr>
        <tr><Button value={'1'}/><Button value={'2'}/><Button value={'3'}/></tr>
      </tbody>
    </table>
  </div>);
};

export default Numpad;