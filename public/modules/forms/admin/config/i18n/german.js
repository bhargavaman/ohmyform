'use strict';

angular.module('forms').config(['$translateProvider', function ($translateProvider) {

	$translateProvider.translations('de', {
		// Konfigurieren der Formularregisterkarte
		ADVANCED_SETTINGS: 'Erweiterte Einstellungen',
		FORM_NAME: 'Formularname',
		FORM_STATUS: 'Formularstatus',
		PUBLIC: 'Öffentlich',
		PRIVATE: 'Privat',
		GA_TRACKING_CODE: 'Google Analytics Tracking-Code',
		DISPLAY_FOOTER: 'Formularfußzeile anzeigen?',
		SAVE_CHANGES: 'Änderungen speichern',
		CANCEL: 'Abbrechen',
		DISPLAY_START_PAGE: 'Startseite anzeigen?',
		DISPLAY_END_PAGE: 'Benutzerdefinierte Endseite anzeigen?',
		ENABLE_EMAIL_NOTIFICATIONS: 'E-Mail-Benachrichtigungen aktivieren',
		EMAIL_NOTIFICATION_RECIPIENTS: 'E-Mail-Benachrichtigungsempfänger',
		GENERAL_TAB: 'Allgemein',
		SELF_NOTIFICATIONS_TAB: 'Selbstbenachrichtigungen',
		RESPONDANT_NOTIFICATIONS_TAB: 'Beantwortungsbenachrichtigungen',

		// Listenformularansicht
		CREATE_A_NEW_FORM: 'Erstelle ein neues Formular',
		CREATE_FORM: 'Formular erstellen',
		CREATED_ON: 'Erstellt am',
		MY_FORMS: 'Meine Formulare',
		NAME: 'Name',
		SPRACHE: 'Sprache',
		FORM_PAUSED: 'Formular pausiert',

		// Feld Modal bearbeiten
		EDIT_FIELD: 'Dieses Feld bearbeiten',
		SAVE_FIELD: 'Speichern',
		ON: 'ON',
		AUS: 'AUS',
		REQUIRED_FIELD: 'Erforderlich',
		LOGIC_JUMP: 'Logischer Sprung',
		SHOW_BUTTONS: 'Zusätzliche Schaltflächen',
		SAVE_START_PAGE: 'Speichern',

		// Admin-Formularansicht
		ARE_YOU_SURE: "Bist du ABSOLUT sicher?",
		READ_WARNING: 'Unerwartete schlimme Dinge werden passieren, wenn Sie das nicht lesen!',
		DELETE_WARNING1: 'Diese Aktion kann NICHT rückgängig gemacht werden. Dies wird dauerhaft die "',
		DELETE_WARNING2: '"Formular und entferne alle verknüpften Formulareinreichungen.',
		DELETE_CONFIRM: 'Bitte geben Sie den Namen des zu bestätigenden Formulars ein.',
		I_UNDERSTAND: "Ich verstehe die Konsequenzen, lösche dieses Formular.",
		DELETE_FORM_SM: 'Löschen',
		DELETE_FORM_MD: 'Formular löschen',
		DELETE: 'Löschen',
		FORM: 'Formular',
		VIEW: 'Ansicht',
		LIVE: 'Leben',
		PREVIEW: 'Vorschau',
		COPY: 'Kopieren',
		COPY_AND_PASTE: 'Kopieren und einfügen, um Ihre TellForm auf Ihrer Website hinzuzufügen',
		CHANGE_WIDTH_AND_HEIGHT: 'Ändern Sie die Werte für Breite und Höhe, um Ihnen am besten zu entsprechen',
		POWERED_BY: 'Unterstützt von',
		TELLFORM_URL: "Ihr TellForm ist dauerhaft unter dieser URL",

		// Formularansicht bearbeiten
		DISABLED: 'Deaktiviert',
		JA: 'JA',
		NO: 'NEIN',
		ADD_LOGIC_JUMP: 'Logic Jump hinzufügen',
		ADD_FIELD_LG: 'Klicken Sie auf Neues Feld hinzufügen',
		ADD_FIELD_MD: 'Neues Feld hinzufügen',
		ADD_FIELD_SM: 'Feld hinzufügen',
		EDIT_START_PAGE: 'Startseite bearbeiten',
		EDIT_END_PAGE: 'Endseite bearbeiten',
		WELCOME_SCREEN: 'Startseite',
		END_SCREEN: 'Ende Seite',
		INTRO_TITLE: 'Titel',
		INTRO_PARAGRAPH: "Absatz",
		INTRO_BTN: 'Start Knopf',
		TITLE: "Titel",
		PARAGRAPH: "Absatz",
		BTN_TEXT: 'Zurück Button',
		TASTEN: 'Knöpfe',
		BUTTON_TEXT: 'Text',
		BUTTON_LINK: 'Link',
		ADD_BUTTON: 'Schaltfläche hinzufügen',
		PREVIEW_FIELD: 'Vorschaufrage',
		QUESTION_TITLE: 'Titel',
		QUESTION_DESCRIPTION: 'Beschreibung',
		OPTIONS: 'Optionen',
		ADD_OPTION: 'Option hinzufügen',
		NUM_OF_STEPS: 'Anzahl der Schritte',
		CLICK_FIELDS_FOOTER: 'Klicken Sie auf Felder, um sie hier hinzuzufügen',
		IF_THIS_FIELD: 'Wenn dieses Feld',
		IS_EQUAL_TO: 'ist gleich',
		IS_NOT_EQUAL_TO: 'ist nicht gleich',
		IS_GREATER_THAN: 'ist größer als',
		IS_GREATER_OR_EQUAL_THAN: 'ist größer oder gleich',
		IS_SMALLER_THAN: 'ist kleiner als',
		IS_SMALLER_OR_EQUAL_THAN: 'ist kleiner oder gleich',
		CONTAINS: 'enthält',
		DOES_NOT_CONTAINS: 'enthält nicht',
		ENDS_WITH: 'endet mit',
		DOES_NOT_END_WITH: 'endet nicht mit',
		STARTS_WITH: 'beginnt mit',
		DOES_NOT_START_WITH: 'beginnt nicht mit',
		THEN_JUMP_TO: 'Springe dann zu',

		// Bearbeiten der Einreichungsansicht
		TOTAL_VIEWS: 'Gesamtzahl eindeutiger Besuche',
		RESPONSES: 'Antworten',
		COMPLETION_RATE: 'Abschlussrate',
		AVERAGE_TIME_TO_COMPLETE: 'avg. Fertigstellungszeit',

		DESKTOP_AND_LAPTOP: 'Desktops',
		TABLETS: "Tabletten",
		PHONES: 'Telefone',
		OTHER: 'Andere',
		UNIQUE_VISITS: 'Eindeutige Besuche',

		FIELD_TITLE: 'Feldtitel',
		FIELD_VIEWS: 'Feld Ansichten',
		FIELD_DROPOFF: 'Feldabschluss',
		FIELD_RESPONSES: 'Feldantworten',
		DELETE_SELECTED: 'Ausgewählte löschen',
		EXPORT_TO_EXCEL: 'Export nach Excel',
		EXPORT_TO_CSV: 'In CSV exportieren',
		EXPORT_TO_JSON: 'Export nach JSON',
		PERCENTAGE_COMPLETE: 'Prozent abgeschlossen',
		TIME_ELAPSED: 'Zeit verstrichen',
		DEVICE: 'Gerät',
		LOCATION: 'Ort',
		IP_ADDRESS: 'IP-Adresse',
		DATE_SUBMITTED: 'Eingereichtes Datum',

		// Entwurfsansicht
		BACKGROUND_COLOR: 'Hintergrundfarbe',
		DESIGN_HEADER: 'Ändern Sie, wie Ihr Formular aussieht',
		QUESTION_TEXT_COLOR: 'Fragetextfarbe',
		ANSWER_TEXT_COLOR: 'Textfarbe beantworten',
		BTN_BACKGROUND_COLOR: 'Schaltfläche Hintergrundfarbe',
		BTN_TEXT_COLOR: 'Schaltfläche Textfarbe',

		// Freigabeansicht
		EMBED_YOUR_FORM: 'Einbetten Ihres Formulars',
		SHARE_YOUR_FORM: 'Teilen Sie Ihr Formular',

		// Admin-Registerkarten
		CREATE_TAB: 'Erstellen',
		DESIGN_TAB: 'Entwurf',
		CONFIGURE_TAB: 'Konfigurieren',
		ANALYZE_TAB: 'Analysieren',
		SHARE_TAB: 'Freigeben',

		// Feldtypen
		SHORT_TEXT: 'Kurztext',
		EMAIL: 'Email',
		MULTIPLE_CHOICE: 'Mehrfachauswahl',
		DROPDOWN: 'Dropdown-Liste',
		DATE: 'Datum',
		PARAGRAPH_FIELD: "Absatz",
		YES_NO: 'Ja / Nein',
		LEGAL: "Rechtliche",
		RATING: 'Bewertung',
		NUMBERS: 'Zahlen',
		SIGNATURE: "Unterschrift",
		FILE_UPLOAD: 'Datei-Upload',
		OPTION_SCALE: 'Optionsskala',
		ZAHLUNG: "Zahlung",
		STATEMENT: 'Anweisung',
		LINK: 'Link',

		// Formularvorschau
		FORM_SUCCESS: 'Formulareintrag erfolgreich gesendet!',
		REVIEW: 'Überprüfung',
		BACK_TO_FORM: 'Gehe zurück zu Formular',
		EDIT_FORM: 'Bearbeiten Sie diese TellForm',
		ADVANCEMENT: '{{done}} von {{total}} wurde beantwortet',
		CONTINUE_FORM: 'Weiter zum Formular',
		REQUIRED: 'erforderlich',
		COMPLETING_NEEDED: '{{answers_not_completed}} Antwort (en) müssen ausgefüllt werden',
		OPTIONAL: 'optional',
		ERROR_EMAIL_INVALID: 'Geben Sie eine gültige E-Mail-Adresse ein',
		ERROR_NOT_A_NUMBER: 'Bitte nur gültige Nummern eingeben',
		ERROR_URL_INVALID: 'Bitte eine gültige URL',
		OK: 'OK',
		ENTER: 'ENTER drücken',
		NEWLINE: 'Drücken Sie UMSCHALT + EINGABETASTE, um eine neue Zeile zu erstellen',
		CONTINUE: 'Weiter',
		LEGAL_ACCEPT: "Ich akzeptiere",
		LEGAL_NO_ACCEPT: "Ich akzeptiere nicht",
		SUBMIT: 'Senden',
		UPLOAD_FILE: 'Hochladen Ihrer Datei'
	});

}]);
