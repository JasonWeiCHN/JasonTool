package com.jason.test;

import java.io.InputStream;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.sun.jersey.core.header.FormDataContentDisposition;
import com.sun.jersey.multipart.FormDataParam;

@Path("jason")
public class JasonService {


	@GET
	@Path("hello")
	@Produces(MediaType.TEXT_PLAIN)
	public String sayHello() {
		return "Hello world from tsh";
	}
	
	@POST
    @Path("uploadDoc")
    @Consumes(MediaType.MULTIPART_FORM_DATA)
    public Response uploadFile(@FormDataParam("file_upload") InputStream uploadedInputStream,@FormDataParam("file_upload") FormDataContentDisposition disposition) {
        String fileName = "";
        System.out.println(uploadedInputStream.toString());
        System.out.println(disposition.toString());
        return Response.status(200)
            .entity("uploadFile is called, Uploaded file name : " + fileName).build();
    }
	
}