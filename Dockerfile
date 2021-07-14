# Build Stage
FROM node:lts-alpine AS builder
COPY . /usr/local/src/app
WORKDIR /usr/local/src/app
RUN npm install
RUN npm run build

# Production Stage
FROM nginx:stable-alpine
COPY --from=builder /usr/local/src/app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
