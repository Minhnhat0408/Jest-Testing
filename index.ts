export function calculateShippingCost(orderWeight : number, distance : number) {
  let fee = 0;
  if (orderWeight <= 0 || distance <= 0) {
    return "Số liệu không hợp lệ";
  } else if (orderWeight < 20) {
    fee = 100000;
  } else if (orderWeight >= 20 && orderWeight < 50) {
    fee = distance <= 10 ? 150000 : 200000;
  }else if (orderWeight >= 50 && orderWeight <= 100) {
    fee = 400000;
  }else if (orderWeight > 100) {
    return "Không hỗ trợ vận chuyển đơn hàng";
  }
  return fee + " VND";
}

