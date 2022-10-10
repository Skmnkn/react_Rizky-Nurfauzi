import { useState } from "react";
import { useRef } from "react";

function FormPages() {
  const BASEDATA = {
    nama: "",
    email: "",
    noHandphone: "",
    pendidikan: "",
    kelas: "",
    harapan: "",
  };

  const BASE_ERROR = {
    nama: "",
    email: "",
    noHandphone: "",
  };

  const [data, setData] = useState(BASEDATA);
  const suratKesungguhan = useRef(null);
  const [errorMsg, setErrorMsg] = useState(BASE_ERROR);

  const validation = (name, value) => {
    const noHandphoneRegex = new RegExp(/[0-9]/g);
    const nameRegex = new RegExp(/^[a-z ,.'-]+$/i);
    const emailRegex = new RegExp(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

    if (name === "nama") {
      if (value.match(nameRegex) || value === "") {
        setErrorMsg({ ...errorMsg, nama: "" });
        if (errorMsg.email === "" && errorMsg.noHandphone === "") {
        }
      } else {
        setErrorMsg({ ...errorMsg, nama: "Nama Lengkap harus berupa Huruf" });
      }
    }

    if (name === "email") {
      if (value.match(emailRegex) || value === "") {
        setErrorMsg({ ...errorMsg, email: "" });
        if (errorMsg.nama === "" && errorMsg.noHandphone === "") {
        }
      } else {
        setErrorMsg({ ...errorMsg, email: "Email tidak sesuai" });
      }
    }

    if (name === "noHandphone") {
      if (!noHandphoneRegex.test(value)) {
        setErrorMsg({
          ...errorMsg,
          noHandphone: "Nomor handphone harus berupa angka",
        });
      } else if (value.length < 9) {
        setErrorMsg({
          ...errorMsg,
          noHandphone: "Nomor Handphone Minimal 9 Digit",
        });
      } else if (value.length === 14) {
        setErrorMsg({
          ...errorMsg,
          noHandphone: "Anda telah mencapai batas Karakter Nomor Handphone",
        });
      } else {
        setErrorMsg({ ...errorMsg, noHandphone: "" });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      errorMsg.nama !== "" ||
      errorMsg.email !== "" ||
      errorMsg.noHandphone !== ""
    ) {
      alert("Data pendaftar tidak sesuai");
    } else {
      alert(`Data pendaftar "${data.nama}" berhasil diterima`);
      setData(BASEDATA);
      suratKesungguhan.current.value = "";
      setErrorMsg("");
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({
      ...data,
      [name]: value,
    });
    // console.log("data", data);

    validation(name, value);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setData(BASEDATA);
    suratKesungguhan.current.value = "";
    setErrorMsg("");
  };

  return (
    <form>
      <div>
        <div className="mb-2">
          <label className="form-label">Nama Lengkap</label>
          <input
            type="text"
            className="form-control"
            name="nama"
            onChange={handleChange}
            value={data.nama}
          />
          <span className="text-danger">{errorMsg.nama}</span>
        </div>
        <div className="mb-2">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="contoh@mail.com"
            name="email"
            onChange={handleChange}
            value={data.email}
          />
          <span className="text-danger">{errorMsg.email}</span>
        </div>
        <div className="mb-2">
          <label className="form-label">Nomor Handphone</label>
          <input
            type="text"
            className="form-control"
            maxLength={14}
            name="noHandphone"
            onChange={handleChange}
            value={data.noHandphone}
          />
          <span className="text-danger">{errorMsg.noHandphone}</span>
        </div>
        <div className="mb-2">
          <label className="form-label">
            <p>Latar Belakang Pendidikan</p>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="pendidikan"
                value="IT"
                checked={data.pendidikan === "IT"}
                onChange={handleChange}
              />
              IT
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="pendidikan"
                value="Non IT"
                checked={data.pendidikan === "Non IT"}
                onChange={handleChange}
              />
              Non IT
            </div>
          </label>
        </div>
        <div className="mb-2">
          <label className="form-label">Kelas Koding yang Dipilih</label>
          <select
            className="form-select"
            aria-label="Default select example"
            name="kelas"
            value={data.kelas}
            onChange={handleChange}
          >
            <option selected>-- Pilih Salah Satu Program --</option>
            <option value="backend">Coding Backend with Golang</option>
            <option value="frontend">Coding Frontend with ReactJS</option>
            <option value="fullstack">Fullstack Developer</option>
          </select>
        </div>
        <div className="mb-2">
          <label htmlFor="formFile" className="form-label">
            Foto Surat Kesungguhan
          </label>
          <input
            className="form-control"
            type="file"
            name="file"
            ref={suratKesungguhan}
          />
        </div>

        <div className="mb-2">
          <label className="form-label">
            Harapan Untuk Coding Bootcamp Ini
          </label>
          <textarea
            className="form-control"
            rows={3}
            value={data.harapan}
            name="harapan"
            onChange={handleChange}
          />
        </div>
      </div>
      <input
        type="submit"
        value="Submit"
        className="btn btn-primary"
        onClick={handleSubmit}
      />
      <input
        type="button"
        value="Reset"
        className="btn btn-danger"
        onClick={handleReset}
      />
    </form>
  );
}
export default FormPages;
