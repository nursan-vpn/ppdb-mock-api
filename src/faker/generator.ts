import { faker } from "@faker-js/faker";
import { RegistrationType, SchoolLevel } from "../type/common";
import { RegistrationInformation } from "src/type/registration-information";
import { FAQ } from "../type/faq";
import { ContactInfo } from "../type/contact";

export function getRegistrationInfo(count = 10): RegistrationInformation[] {
    let result = [];
    for (let i = 0; i < count; i++) {
        result.push(generatePathInformation())
    }

    return result;
}

export function generatePathInformation(): RegistrationInformation {
    return {
        id: faker.number.int({ min: 1, max: 100 }),
        name: faker.person.jobDescriptor(),
        level: faker.helpers.enumValue(SchoolLevel),
        type: faker.helpers.enumValue(RegistrationType)
    }
}

export function generateFaqs(count = 10): FAQ[] {
    let result = [];
    for (let i = 0; i < count; i++) {
        result.push(generateFaq())
    }
    return result;
}


export function generateFaq(): FAQ {
    return {
        id: faker.number.int({ min: 1, max: 100 }),
        title: faker.lorem.sentence({max: 4, min:2}),
        description: faker.lorem.paragraph()
    }
}


export function generateContactInfo(): ContactInfo {
    return {
        address: faker.location.streetAddress(),
        email: faker.internet.email(),
        phone: faker.string.numeric({ length: 11 }),
        alternative_phone: faker.string.numeric({ length: 11 }),
        other_phone: faker.string.numeric({ length: 11 }),
        whatsapp: faker.string.numeric({ length: 11 }),
        instagram: faker.internet.url(),
        facebook: faker.internet.url(),
        website: faker.internet.url()
    }
}