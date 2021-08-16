import React from 'react'

const svgIcons = (type,color="#bbb") => {
  const SVG = {
  home:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={color}><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/></svg>,
  recipes:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={color}><g><rect fill="none" height="24" width="24"/></g><g><g/><g><path d="M21,5c-1.11-0.35-2.33-0.5-3.5-0.5c-1.95,0-4.05,0.4-5.5,1.5c-1.45-1.1-3.55-1.5-5.5-1.5S2.45,4.9,1,6v14.65 c0,0.25,0.25,0.5,0.5,0.5c0.1,0,0.15-0.05,0.25-0.05C3.1,20.45,5.05,20,6.5,20c1.95,0,4.05,0.4,5.5,1.5c1.35-0.85,3.8-1.5,5.5-1.5 c1.65,0,3.35,0.3,4.75,1.05c0.1,0.05,0.15,0.05,0.25,0.05c0.25,0,0.5-0.25,0.5-0.5V6C22.4,5.55,21.75,5.25,21,5z M21,18.5 c-1.1-0.35-2.3-0.5-3.5-0.5c-1.7,0-4.15,0.65-5.5,1.5V8c1.35-0.85,3.8-1.5,5.5-1.5c1.2,0,2.4,0.15,3.5,0.5V18.5z"/><g><path d="M17.5,10.5c0.88,0,1.73,0.09,2.5,0.26V9.24C19.21,9.09,18.36,9,17.5,9c-1.7,0-3.24,0.29-4.5,0.83v1.66 C14.13,10.85,15.7,10.5,17.5,10.5z"/><path d="M13,12.49v1.66c1.13-0.64,2.7-0.99,4.5-0.99c0.88,0,1.73,0.09,2.5,0.26V11.9c-0.79-0.15-1.64-0.24-2.5-0.24 C15.8,11.66,14.26,11.96,13,12.49z"/><path d="M17.5,14.33c-1.7,0-3.24,0.29-4.5,0.83v1.66c1.13-0.64,2.7-0.99,4.5-0.99c0.88,0,1.73,0.09,2.5,0.26v-1.52 C19.21,14.41,18.36,14.33,17.5,14.33z"/></g></g></g></svg>,
  addRecipe:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={color}><g><rect fill="none" height="24" width="24"/></g><g><g/><g><path d="M17,19.22H5V7h7V5H5C3.9,5,3,5.9,3,7v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-7h-2V19.22z"/><path d="M19,2h-2v3h-3c0.01,0.01,0,2,0,2h3v2.99c0.01,0.01,2,0,2,0V7h3V5h-3V2z"/><rect height="2" width="8" x="7" y="9"/><polygon points="7,12 7,14 15,14 15,12 12,12"/><rect height="2" width="8" x="7" y="15"/></g></g></svg>,
  logout:<svg xmlns="http://www.w3.org/2000/svg"  viewBox="-2 0 24 24" fill={color}><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M17,8l-1.41,1.41L17.17,11H9v2h8.17l-1.58,1.58L17,16l4-4L17,8z M5,5h7V3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h7v-2H5V5z"/></g></svg>,
  avatar:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill={color}><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"/></svg>,
  timer:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={color}><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.07 1.01h-6v2h6v-2zm-4 13h2v-6h-2v6zm8.03-6.62l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.14 4.74 14.19 4 12.07 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.11-.74-4.06-1.97-5.61zm-7.03 12.62c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/></svg>,
  portion:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={color}><path d="M18.7,11l4.9-4.7L22.4,5l-6.7,6H18.7z M19.8,2.1l-1.6-0.9L11.6,11H14L19.8,2.1z M0,13l0.1,0.6  c0.4,4.3,3.1,8.3,7,10L7.2,24h9.6l0.2-0.6c3.9-1.8,6.6-5.3,7-9.5L24,13H0z M16.3,22H7.7c-2.8-1-4.8-4-5.4-7h19.6  C21.2,18,19.1,21,16.3,22z"/></svg>,
  people:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={color}><path d="M0 0h24v24H0V0z" fill="none"/><path d="M9 12c1.93 0 3.5-1.57 3.5-3.5S10.93 5 9 5 5.5 6.57 5.5 8.5 7.07 12 9 12zm0-5c.83 0 1.5.67 1.5 1.5S9.83 10 9 10s-1.5-.67-1.5-1.5S8.17 7 9 7zm.05 10H4.77c.99-.5 2.7-1 4.23-1 .11 0 .23.01.34.01.34-.73.93-1.33 1.64-1.81-.73-.13-1.42-.2-1.98-.2-2.34 0-7 1.17-7 3.5V19h7v-1.5c0-.17.02-.34.05-.5zm7.45-2.5c-1.84 0-5.5 1.01-5.5 3V19h11v-1.5c0-1.99-3.66-3-5.5-3zm1.21-1.82c.76-.43 1.29-1.24 1.29-2.18C19 9.12 17.88 8 16.5 8S14 9.12 14 10.5c0 .94.53 1.75 1.29 2.18.36.2.77.32 1.21.32s.85-.12 1.21-.32z"/></svg>,
  starFilled:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={color}><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>,
  starBorder:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={color}><path d="M0 0h24v24H0V0z" fill="none"/><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg>,
  tray:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill={color}><g><path d="M58.923,50.382c0.102-0.244,0.102-0.52,0-0.764c-0.102-0.245-0.296-0.439-0.541-0.541   C58.26,49.026,58.13,49,58,49h-2.5c-0.001-12.645-9.988-22.952-22.505-23.475c0-0.009,0.005-0.017,0.005-0.025v-2.663   c1.442-0.433,2.499-1.753,2.5-3.337c-0.001-1.934-1.566-3.499-3.5-3.5c-1.934,0.001-3.499,1.566-3.5,3.5   c0.001,1.584,1.058,2.904,2.5,3.337V25.5c0,0.009,0.005,0.017,0.005,0.025C18.488,26.048,8.501,36.355,8.5,49H6   c-0.13,0-0.26,0.026-0.382,0.077c-0.245,0.102-0.439,0.296-0.541,0.541c-0.102,0.244-0.102,0.52,0,0.764   c0.051,0.123,0.124,0.234,0.217,0.326l5.878,5.878c0.72,0.715,1.679,1.287,2.703,1.715C14.902,58.723,15.985,58.996,17,59h30   c1.015-0.004,2.098-0.277,3.125-0.699c1.024-0.428,1.983-1,2.703-1.715l5.878-5.878C58.799,50.616,58.872,50.505,58.923,50.382z    M30.5,19.5c0.002-0.828,0.672-1.498,1.5-1.5c0.828,0.002,1.498,0.672,1.5,1.5c-0.002,0.828-0.672,1.498-1.5,1.5   C31.172,20.998,30.502,20.328,30.5,19.5z M16.798,33.798C20.691,29.905,26.061,27.5,32,27.5s11.309,2.405,15.202,6.298   C51.095,37.691,53.499,43.061,53.5,49h-43C10.5,43.061,12.905,37.691,16.798,33.798z M51.414,55.172   c-0.446,0.451-1.223,0.939-2.055,1.281C48.53,56.8,47.636,57.004,47,57H17c-0.636,0.004-1.53-0.2-2.359-0.547   c-0.832-0.342-1.608-0.83-2.055-1.281L8.414,51h47.172L51.414,55.172z" fill="#231F20"/><path d="M24.684,32.052c-3.209,1.068-5.364,2.95-6.702,4.558c-1.34,1.61-1.882,2.95-1.91,3.02   c-0.205,0.513,0.045,1.095,0.558,1.3s1.095-0.045,1.3-0.558V40.37c0.032-0.078,0.534-1.251,1.7-2.611   c1.168-1.361,2.983-2.908,5.688-3.811c0.523-0.174,0.807-0.74,0.632-1.265C25.774,32.16,25.208,31.877,24.684,32.052z" fill="#231F20"/></g></svg>,
  search:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={color}><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
}

  return SVG[type]
}

export default svgIcons