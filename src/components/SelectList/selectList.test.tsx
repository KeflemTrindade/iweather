import { render, screen, fireEvent } from "@testing-library/react-native";
import { SelectList } from "@components/SelectList";

describe("Component: SelectList", () => {
  it("should be return city details selected.", () => {
    const data = [
      {
        id: "1",
        name: "Cuiabá",
        latitude: 12356,
        longitude: 15613,
      },
      {
        id: "2",
        name: "Porto Velho",
        latitude: 2591,
        longitude: 51165,
      },
    ];

    render(<SelectList data={data} onChange={() => {}} onPress={() => {}} />);

    const selectedCity = screen.getByText(/Cuiabá/);
    fireEvent.press(selectedCity);
  });
});
