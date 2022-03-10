import React from "react";
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe("Test GifGridItem.js", () => {
  const data = { id: 1, title: "Un título", url: "https://localhost/algo.jpg" };

  let wrapper = shallow(<GifGridItem {...data} />);
  test("Debe de mostrar el componente correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe tener un párrafo con el titulo", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(data.title);
  });
  test("debe de tener la imagen igual al url y alt de los props", () => {
    const img = wrapper.find("img");
    expect(img.prop("src")).toBe(data.url);
    expect(img.prop("alt")).toBe(data.title);
  });
  test("debe de tener el animate__fadeIn", () => {
    const img = wrapper.find("div");
    const className = img.props("class").className;
    expect(className.includes("animate__fadeIn")).toBe(true);
  });
});
