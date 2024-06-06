import { Routes, Route } from "react-router-dom";
import Form from "../components/Form";

function RoutesIndex() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Form />} />
    </Routes>
  );
}