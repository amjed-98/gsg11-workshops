/*
 * Exercise: Refactor the code!
 *
 * This script file contains a small front-end app that queries the
 * StackOverflow API. It works, but the code is not ideal; there is a lot of
 * work to do to clean it up.
 *
 * First take a few minutes to understand what the code is doing, then use what
 * you have learned in the preceding stage-1 exercises to refactor the app.
 *
 * Take your time, and think about what principles you are trying to apply while
 * you are refactoring.
 */
'use strict';

const addListener = (selector, event, cb) => {
    document.querySelector(selector).addEventListener(event, (e) => {
        e.preventDefault();
        cb(e);
    });
};

const useForm = (e) => {
    var form = e.target;
    var tags = form.querySelector('input[name=tags]').value;
    var url =
        'https://api.stackexchange.com/2.2/questions/unanswered?order=desc&sort=activity&site=stackoverflow&tagged=' +
        tags;

    return { url, tags };
};

const applySummaryToDom = (selector, response, tags) => {
    document.querySelector(selector).innerHTML =
        '' +
        '<p>' +
        'Query of ' +
        tags +
        ' returned ' +
        response.items.length +
        ' results' +
        '</p>';
};

const applyResultToDom = (selector, response) => {
    document.querySelector(selector).innerHTML = response.items
        .map(function (item) {
            return (
                '' +
                '<div>' +
                '<p>Title: ' +
                item.title +
                '</p>' +
                '<p>Date: ' +
                new Date(item.creation_date) +
                '</p>' +
                '<p>Link: <a href="' +
                item.link +
                '">Click here</a></p>' +
                '<p>Owner: ' +
                item.owner.display_name +
                '</p>' +
                '</div>'
            );
        })
        .join('<br>');
};

// ******************************************************************************** //

addListener('#form-unanswered', 'submit', function (e) {
    const { url, tags } = useForm(e);

    var xhr = new XMLHttpRequest();

    xhr.addEventListener('load', function () {
        if (xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);

            applySummaryToDom('#results-summary', response, tags);

            applyResultToDom('#results-body', response);
        } else {
            console.log('Status Code: ' + xhr.status);
        }
    });

    xhr.open('GET', url);
    xhr.send();
});

addListener('#form-answerers', 'submit', function (e) {
    const { url, tags } = useForm(e);

    var xhr = new XMLHttpRequest();

    xhr,
        addEventListener('load', function () {
            if (xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);

                applySummaryToDom('#results-summary', response, tags);

                applyResultToDom('#results-body', response);
            } else {
                console.log('Status Code: ' + xhr.status);
            }
        });

    xhr.open('GET', url);
    xhr.send();
});
