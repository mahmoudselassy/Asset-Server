interface Fault {
  date: Date;
  description: string;
}
interface NLPModel {
  name: string;
  type: string;
}
interface Asset {
  assetType: string;
  assetInfo: string;
  assetStartDate: Date;
  maintenanceHistory: Date[];
  faultsHistory: Fault[];
  // model: NLPModel;
}
export { Asset };
