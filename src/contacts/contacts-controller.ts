import { ResponseEnvelope } from "../type/response";
import { ContactInfo } from "../type/contact";
import { Body, Controller, Example, Get, Post, Route, Tags } from "tsoa";
import { generateContactInfo } from "../faker/generator";

@Route("/ppdb/contacts/")
@Tags("CMS", "Contact")
export class ContactController extends Controller {
    
    /**
     * Get PPDB Contact Information
     * @summary Get Contact Information
     */
    @Get("")
    @Example<ResponseEnvelope<ContactInfo>>({
        "code": 200,
        "error": false,
        "message": "",
        "data": {
            "address": "Jl. Raya Ciputat Parung No. 1, Ciputat, Tangerang Selatan",
            "email": "ppdb@example.com",
            "phone": "021-123456",
            "alternative_phone": "08123456789",
            "other_phone": "08123456789",
            "whatsapp": "628123456789",
            "instagram": "https://instagram.com/ppdb", // Profil url,
            "facebook": "https://facebook.com/ppdb", // Profil url,
            "website": "https://www.ppdb.com",
        }
    })
    public async getContacts(): Promise<ResponseEnvelope<ContactInfo>> {
        return {
            "code": 200,
            "error": false,
            "message": "",
            "data": generateContactInfo()
        }
    }


    /**
     * Save PPDB Contact Information
     * @summary Save Contact Information
     */
    @Post("")
    @Example<ResponseEnvelope<ContactInfo>>({
        "code": 200,
        "error": false,
        "message": "",
        "data": {
            "address": "Jl. Raya Ciputat Parung No. 1, Ciputat, Tangerang Selatan",
            "email": "ppdb@example.com",
            "phone": "021-123456",
            "alternative_phone": "08123456789",
            "other_phone": "08123456789",
            "whatsapp": "628123456789",
            "instagram": "https://instagram.com/ppdb", // Profil url,
            "facebook": "https://facebook.com/ppdb", // Profil url,
            "website": "https://www.ppdb.com",
        }
    })
    public async saveContacts(
        @Body() contact: ContactInfo
    ): Promise<ResponseEnvelope<ContactInfo>> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    "code": 200,
                    "error": false,
                    "message": "",
                    "data": generateContactInfo()
                })
            },2000)
        })
    }
}