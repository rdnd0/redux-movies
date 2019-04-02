//keep our action separate so it is easier for us to call them in different components

export const TOGGLE_MESSAGE = "TOGGLE_MESSAGE"; //this will be used by the reducer to avoid typos

export function toggleMessage() {
  return {
    type: TOGGLE_MESSAGE
  };
}
