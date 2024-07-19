import logo from "../../assets/logo.svg";
import TextField, { Input } from "@material/react-text-field";

import { Container, Search } from "./styles";
import { useState } from "react";

const Home = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    const inputTarget = e.target as HTMLInputElement;
    setInputValue(inputTarget.value);
  };

  return (
    <Container>
      <Search>
        <img src={logo} alt="Logo do restaurante" />
        <TextField
          label="Pesquisar"
          outlined
          // onTrailingIconSelect={() => this.setState({ value: "" })}
          // trailingIcon={<MaterialIcon role="button" icon="delete" />}
        >
          <Input value={inputValue} onChange={handleInputChange} />
        </TextField>
      </Search>
    </Container>
  );
};
export { Home };
