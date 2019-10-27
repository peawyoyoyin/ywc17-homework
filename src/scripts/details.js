import sanitizeHtml from 'sanitize-html';

/**
 * @param {string} durationText 
 */
export function setDurationText(durationText) {
  document.getElementById('duration').innerText = durationText;
}

/**
 * @param {string} detailText 
 */
export function setDetailText(detailText) {
  const escapedDetailText = sanitizeHtml(detailText);
  
  document.getElementById('details-details').innerHTML = escapedDetailText;
}

/**
 * @param {string} conditionText 
 */
export function setConditionText(conditionText) {
  const escapedConditionText = sanitizeHtml(conditionText);

  document.getElementById('details-condition').innerHTML = escapedConditionText;
}
