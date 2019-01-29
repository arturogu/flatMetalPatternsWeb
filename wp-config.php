<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wp_metalpatterns');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'sCL[_Zh]seECS_5q,SFm.w~0n>42eQXOPi$dEJ3GpB@FTKC`rP!x=[F30n%3oPAy');
define('SECURE_AUTH_KEY',  '^Ze,$o*3xf?og_Z>?Kd3sg&vtSw;%&c+UoFv)m$>ba_k@6!*EVg4ZMsCog7~;-re');
define('LOGGED_IN_KEY',    't=#!XG=K{xN~bOkLJI,**o+^>l[_HR|]g -~UJ)F#}3Xh6Q:DeR@}lkWjW5cEba$');
define('NONCE_KEY',        '2l&.8vZlw16Wvd+q}}J^vK9Yy@`p83sVst}5NhL95eu^%PPBpyM9=lbQd^A1q]:[');
define('AUTH_SALT',        '%..0j>#V~TGP&9W|/|?~P]N,(mTSrqq]5k7p:99L-}n6OMc:R7*K_hT%5K0oG,N7');
define('SECURE_AUTH_SALT', '@Z-G/|F?8=Ggau9em,ef/dRTOvzkr&,76i~q;W3tLJFYZeC:aj>Cc|w=-5(BIq*u');
define('LOGGED_IN_SALT',   'c8Z^HA1(A^TFkGwl_^?l1<))mTNW5~SqJqjttp$f%m!bmE$N`T 8~TzL:bmkA24x');
define('NONCE_SALT',       '@EA<+q{+],QsF7DCclu3I8kfBGynT7bkl~o x S!DF DmZrxl/r5;D[mJeSQnv]t');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
