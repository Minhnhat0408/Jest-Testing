import { calculateShippingCost } from "..";

describe("calculateShippingCost", () => {
  
  test('Trả về "Số liệu không hợp lệ" vì khối lượng không hợp lệ', () => {
    expect(calculateShippingCost(0, 10)).toBe("Số liệu không hợp lệ");
  });
  test('Trả về "Số liệu không hợp lệ" vì khoảng cách không hợp lệ ', () => {
    expect(calculateShippingCost(10, -1)).toBe("Số liệu không hợp lệ");
  });

  test("Trả về 100000 VND vì orderWeight < 20 với mọi khoảng cách", () => {
    expect(calculateShippingCost(10, 25)).toBe("100000 VND");
  });

  test("Trả về 150000 VND vì 20 <= orderWeight < 50 với mọi khoảng cách <= 10", () => {
    expect(calculateShippingCost(25, 10)).toBe("150000 VND");
  });

  test("Trả về 200000 VND vì 20 <= orderWeight < 50 với mọi khoảng cách > 10", () => {
    expect(calculateShippingCost(30, 30)).toBe("200000 VND");
  });

  test("Trả về 400000 VND vì 50 <= orderWeight <= 100 ", () => {
    expect(calculateShippingCost(50, 40)).toBe("400000 VND");
  });
  test('Trả về "Không hỗ trợ vận chuyển đơn hàng trên 100kg" vì orderWeight > 100', () => {
    expect(calculateShippingCost(101, 20)).toBe(
      "Không hỗ trợ vận chuyển đơn hàng"
    );
  });
});
