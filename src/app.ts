import feathers from '@feathersjs/feathers';
import '@feathersjs/transport-commons';
import express from '@feathersjs/express';
import * as dotenv from 'dotenv';
dotenv.config();


const config = {
  auth: {
    pageId: process.env.pageId ,
    accesstoken: process.env.accesstoken ,
  },

export async function performGetOperation(url, headers) {
  const res = await fetch(url, {
    mode: "cors",
    method: "GET",
    headers: headers,
  }).catch(function (error) {
    throw new Error("facebook Insights : " + error.message);
  });

  return await res.json();
}

//Get a Single Metric
export async function getFacebookInsight(pageId, accessToken) {
  const url = `https://graph.facebook.com/v8.0/${pageId}/insights?metric=page_impressions_unique&access_token=${accessToken}`;
  let headers = new Headers();
  headers.append("Accept", "application/json");
  return performGetOperation(url, headers);
}

//Get Multiple Metrics
export async function getFacebookInsight(pageId, accessToken) {
  const url = `https://graph.facebook.com/v8.0/${pageId}/insights?metric=page_impressions_unique,page_engaged_users&access_token=${accessToken}`;
  let headers = new Headers();
  headers.append("Accept", "application/json");
  return performGetOperation(url, headers);
}

//Get Metrics of a Page Post
export async function getFacebookInsight(pageId, accessToken) {
  const url = `https://graph.facebook.com/v8.0/${pageId}/insights?metric=post_reactions_like_total,post_reactions_love_total,post_reactions_wow_total&access_token=${accessToken}`;
  let headers = new Headers();
  headers.append("Accept", "application/json");
  return performGetOperation(url, headers);
}

//Get Video Ad Breaks Impressions
export async function getFacebookInsight(pageId, accessToken) {
  const url = `https://graph.facebook.com/v8.0/${pageId}/insights?metric=page_daily_video_ab_break_ad_impressions_by_crosspost_status
  &period=day
  &since=2017-12-10
  &until=2017-12-14`;
  let headers = new Headers();
  headers.append("Accept", "application/json");
  return performGetOperation(url, headers);
}

//Get Daily Video Ad Break Impressions of a Page Post
export async function getFacebookInsight(pageId, accessToken) {
  const url = `https://graph.facebook.com/v8.0/${pageId}/insights?metric=post_video_ad_break_ad_impressions
  &period=day
  &since=2017-12-10
  &until=2017-12-14
&access_token=${accessToken}`;
  let headers = new Headers();
  headers.append("Accept", "application/json");
  return performGetOperation(url, headers);
}

//Get Lifetime Video Ad Break Impressions of a Page Post
export async function getFacebookInsight(pageId, accessToken) {
  const url = `https://graph.facebook.com/v8.0/${pageId}/insights?metric=post_video_ad_break_ad_impressions
  &period=lifetime&access_token=${accessToken}`;
  let headers = new Headers();
  headers.append("Accept", "application/json");
  return performGetOperation(url, headers);
}




// Creates an ExpressJS compatible Feathers application
const app = express(feathers());

// Start the server
app.listen(5500).on('listening', () =>
  console.log('Feathers server listening on localhost:5500')
);

