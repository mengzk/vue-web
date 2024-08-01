/**
 * Author: Meng
 * Date: 2024-08-01
 * Modify: 2024-08-01
 * Desc:
 */
import { request } from "../network/index";

export function getHomeData() {
  return request({
    url: "/home",
    method: "GET",
  });
}