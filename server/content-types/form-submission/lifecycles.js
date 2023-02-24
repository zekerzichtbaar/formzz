module.exports = {
    async afterCreate(event) {
        const { result } = event;
        
        // Mail to user
        const emailTemplate = {
            subject: 'Bedankt voor je bericht <%= data.name %>',
            text: `Bedankt voor je aanvraag!
                Hallo <%= data.name %>, bedankt voor je aanvraag voor een samenwerking. We nemen contact met je op!`,
            html: `<h1>Bedankt voor je aanvraag!</h1>
                <p>Hallo <%= data.name %>, bedankt voor je aanvraag voor een samenwerking. We nemen contact met je op!<p>`,
        };
        try {
            // await strapi.plugins.email.services.email.sendTemplatedEmail({
            //     to: result.submissionData.email,
            //     from: 'info@kraatseieren.nl',
            // }, emailTemplate, { data: result.submissionData })
        } catch(err) {
            console.log(err);
        }

        // Mail to admin
        const emailTemplateAdmin = {
            subject: 'Er is een samenwerkings verzoek',
            text: `Bedankt voor je aanvraag!
                Hallo <%= data.name %>, bedankt voor je aanvraag voor een samenwerking. We nemen contact met je op!`,
            html: `<h1>Bedankt voor je aanvraag!</h1>
                <p>Hallo <%= data.name %>, bedankt voor je aanvraag voor een samenwerking. We nemen contact met je op!<p>`,
        };
        try {
            // await strapi.plugins.email.services.email.sendTemplatedEmail({
            //     to: 'douwe@zekerzichtbaar.nl',
            //     from: 'info@kraatseieren.nl',
            // }, emailTemplate, { data: result.submissionData })
        } catch(err) {
            console.log(err);
        }
    }
}