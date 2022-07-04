mkdir build
cd frontend
npm install
npm i @vue/cli -g
npm run build
cd ..
cd backend
npm install
npm i @vercel/ncc -g
npm run build
cd ..
cp -r ./frontend/dist ./build/public
mkdir ./build/api
cp ./backend/dist/index.js ./build/api/index.js