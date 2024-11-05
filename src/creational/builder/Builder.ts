const axios = require("axios");

type RestMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE'

type RestRequest = {
  url: string;
  method: RestMethod;
  headers: Record<string, string>;
  data: Record<string, any>;
  query: Record<string, string>;
};

class RestRequestBuilder {
  private url: string;
  private method: RestMethod;
  private headers: Record<string, string>;
  private data: Record<string, any>;
  private query: Record<string, string>;

  setUrl(url: string): RestRequestBuilder {
    this.url = url;
    return this;
  }

  setMethod(method: RestMethod): RestRequestBuilder {
    this.method = method;
    return this;
  }

  setHeaders(headers: Record<string, string>): RestRequestBuilder {
    this.headers = headers;
    return this;
  }

  setBody(body: Record<string, any>): RestRequestBuilder {
    this.data = body;
    return this;
  }

  setQuery(query: Record<string, string>): RestRequestBuilder {
    this.query = query;
    return this;
  }

  build(): RestRequest {
    return {
      url: this.url,
      method: this.method,
      headers: this.headers,
      data: this.data,
      query: this.query,
    };
  }
}

async function callApi() {
  const response = await new axios();
  console.log(response.data);
}

callApi();
// https://65f35058105614e654a05a52.mockapi.io/api/getUsers/User
