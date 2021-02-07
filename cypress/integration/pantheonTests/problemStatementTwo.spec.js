/// <reference types="Cypress"/>

// Dark Sky API Page-Objects

import { darkSkyApiPage } from '../../pantheonTestPageObject/problemStatementTwo';
/*
Test-Cases for Problem Statement 2nd - Some basic tests of the Dark Sky API
*/
describe('Verify that the top level structure and arrays in the JSON contain the correct number of items', () => {
    /*
        Test-Case - 01
    */
    it('Verify the top level structure field and arrays in json', () => {
        cy.request({
            method: darkSkyApiPage.get,
            url: darkSkyApiPage.apiUrl,
            headers: {
                accept: darkSkyApiPage.json
            }
        }).then((response) => {
            // Verify API status
            expect(response.status).to.eq(darkSkyApiPage.success)
            // Verify top level structure 
            expect(response.body).to.have.property(darkSkyApiPage.latitude)
            expect(response.body).to.have.property(darkSkyApiPage.longitude)
            expect(response.body).to.have.property(darkSkyApiPage.timezone)
            expect(response.body).to.have.property(darkSkyApiPage.currently)
            expect(response.body).to.have.property(darkSkyApiPage.hourly)
            expect(response.body).to.have.property(darkSkyApiPage.daily)
            expect(response.body).to.have.property(darkSkyApiPage.flags)
            expect(response.body).to.have.property(darkSkyApiPage.offset)

            // Verify top level structure fields
            expect(response.body.timezone).to.be.a(darkSkyApiPage.isString)

            expect(response.body.currently).to.be.a(darkSkyApiPage.isObject)

            expect(response.body.hourly).to.be.a(darkSkyApiPage.isObject)

            expect(response.body.daily).to.be.a(darkSkyApiPage.isObject)

            expect(response.body.flags).to.be.a(darkSkyApiPage.isObject)

            assert.isNumber(response.body.latitude, darkSkyApiPage.isNumber)

            assert.isNumber(response.body.longitude, darkSkyApiPage.isNumber)

            assert.isNumber(response.body.offset, darkSkyApiPage.isNumber)

            // Verify the data array
            expect(response.body.hourly.data).to.have.lengthOf(darkSkyApiPage.hourlyDataLength)
            expect(response.body.daily.data).to.have.lengthOf(darkSkyApiPage.dailyDataLength)
        }) 
    }),
    /*
        Test-Case - 02
    */
    it('Verifying additional test', () => {
        cy.request({
            method: darkSkyApiPage.get,
            url: darkSkyApiPage.apiUrl,
            headers: {
                accept: darkSkyApiPage.json
            }
        }).then((response) => {
            // Verify API latitude, longitude and timezone value
            expect(response.body.latitude).to.eq(darkSkyApiPage.latitudeValue)
            expect(response.body.longitude).to.eq(darkSkyApiPage.longitudeValue)
            expect(response.body.timezone).to.eq(darkSkyApiPage.timezoneValue)
        })
    })
})