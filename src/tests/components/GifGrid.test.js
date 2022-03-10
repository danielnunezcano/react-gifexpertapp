import React from "react";
import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe("Test GifGrid.js", () => {
  const category = "One Punch";

  test("Debe de mostrar el componente correctamente", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });
  test("debe de mostar items cuando se cargan imágenes userFetchGifs", () => {
    const gifs = [
      {
        id: "ABC",
        url: "https://localhost/cualquier/cosa.png",
        title: "cualquier cosa",
      },
      {
        id: "123",
        url: "https://localhost/cualquier/cosa.png",
        title: "cualquier cosa",
      },
    ];
    useFetchGifs.mockReturnValue({
      data: [...gifs],
      loading: false,
    });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper.find("p").exists()).toBe(false);
    expect(wrapper.find("GifGridItem").length).toBe(gifs.length);
  });
});
