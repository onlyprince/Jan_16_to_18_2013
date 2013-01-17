<%@ WebHandler Language="C#" Class="ajaxex1" %>

using System;
using System.Web;

public class ajaxex1 : IHttpHandler {
    //{"capital":"New Delhi","continent":"Asia"}
    public void ProcessRequest (HttpContext context) {
        String country = context.Request["country"];
        if ("India" == country)
            context.Response.Write("{\"capital\":\"New Delhi\",\"continent\":\"Asia\"}");
        else if ("USA" == country)
            context.Response.Write("{\"capital\":\"Washington D.C\",\"continent\":\"North America\"}");
        else
            context.Response.Write("{\"capital\":\"Unknown\",\"continent\":\"Unknown\"}");
    }
 
    public bool IsReusable {
        get {
            return false;
        }
    }

}