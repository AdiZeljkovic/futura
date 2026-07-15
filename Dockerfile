# FUTURA sajt — Next.js
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
# build-time fetch prema API-ju pada na ugrađeni sadržaj ako API nije dostupan (fail-soft)
ARG FUTURAOS_API_URL=https://api.thefutura.llc
ENV FUTURAOS_API_URL=$FUTURAOS_API_URL
RUN npm run build

FROM node:22-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app ./
EXPOSE 3000
CMD ["npm", "run", "start"]
