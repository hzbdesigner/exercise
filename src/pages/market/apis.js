import request from '@/utils/request';

export function getMarketList() {
  // return request('https://www.binance.co/exchange/public/product');
  return request('https://gist.githubusercontent.com/orangeflame/76e36b3b64e3c76a61039da472032af2/raw/77ff0c083506ba27cb1767aa7e43f8ab5f30c830/RestAPISampleData.json');
}
