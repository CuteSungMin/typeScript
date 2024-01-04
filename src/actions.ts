export interface UpdateItemList {
    title:string,
    description:string,
}

export const addUpdate = (update: UpdateItemList) => ({
    type: 'ADD_UPDATE',
    payload: update,
  });