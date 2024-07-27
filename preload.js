const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: ipcRenderer,
  setAlwaysOnTop: (flag) => ipcRenderer.invoke('setAlwaysOnTop', flag),
  setOpacity: (opacity) => ipcRenderer.invoke('setOpacity', opacity)
});
