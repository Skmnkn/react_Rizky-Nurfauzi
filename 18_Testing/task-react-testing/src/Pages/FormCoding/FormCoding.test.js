import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import NameForm from "./FormCoding";
import userEvent from "@testing-library/user-event";

describe("FormCoding", () => {
  test("Should Render FormCoding Components", () => {
    render(<NameForm />);

    const titleLabel = screen.getByText("Pendaftaran Peserta Coding Bootcamp");
    expect(titleLabel).toBeInTheDocument();

    const labelNama = screen.getByLabelText(/Nama Lengkap/);
    expect(labelNama).toBeInTheDocument();

    const labelEmail = screen.getByLabelText(/Email/);
    expect(labelEmail).toBeInTheDocument();

    const labelNo = screen.getByLabelText(/No Handphone/);
    expect(labelNo).toBeInTheDocument();

    const labelPendidikan = screen.getByLabelText(/Latar Belakang Pendidikan/);
    expect(labelPendidikan).toBeInTheDocument();

    const labelKelas = screen.getByLabelText(/Kelas Coding yang Dipilih/);
    expect(labelKelas).toBeInTheDocument();

    const labelFoto = screen.getByLabelText(/Foto Surat Kesungguhan/);
    expect(labelFoto).toBeInTheDocument();

    const labelHarapan = screen.getByLabelText(
      /Harapan Untuk Coding Bootcamp Ini/
    );
    expect(labelHarapan).toBeInTheDocument();
  });

  test("Should Render Form Input", () => {
    render(<NameForm />);

    fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), {
      target: { value: "test" },
    });

    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: { value: "test@mail.com" },
    });

    fireEvent.input(screen.getByRole("spinbutton", { name: /no handphone/i }), {
      target: { value: "085157022076" },
    });

    fireEvent.change(screen.getByRole("radio", { name: /pendidikan/i }));
    fireEvent.click(screen.getByLabelText(/IT/), { target: { value: "IT" } });

    const selectedItem = screen.getByRole("combobox", { name: /kelas/i });
    userEvent.selectOptions(selectedItem, "reactjs");

    expect(screen.getByLabelText(/Nama Lengkap:/)).toHaveValue("test");
    expect(screen.getByLabelText(/Email:/)).toHaveValue("test@mail.com");
    expect(screen.getByLabelText(/No Handphone:/)).toHaveDisplayValue(
      "085157022076"
    );
    expect(screen.getByLabelText(/Latar Belakang Pendidikan:/)).toBeChecked();
    expect(screen.getByLabelText(/Kelas Coding yang Dipilih:/)).toHaveValue(
      "reactjs"
    );
  });

  test("should render input form", () => {
    render(<NameForm />);

    const alertMock = jest.spyOn(window, "alert").mockImplementation();

    fireEvent.click(screen.getByText("Submit"));
    expect(screen.getByLabelText(/Nama Lengkap/)).toHaveValue("");
    expect(screen.getByLabelText(/Email/)).toHaveValue("");
    expect(screen.getByLabelText(/No Handphone/)).toHaveDisplayValue("");
    expect(
      screen.getByLabelText(/Latar Belakang Pendidikan/)
    ).not.toBeChecked();
    expect(screen.getByLabelText(/Kelas Coding yang Dipilih/)).toHaveValue("");

    expect(alertMock).toHaveBeenCalledTimes(1);
  });
});
