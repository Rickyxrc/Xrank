rm ./backend/dist
cd frontend
npm run build
cd ..
cp -r ./frontend/dist ./backend
docker build -t rickyxrc/xrank .
