# Scattergun

Why I quit working on this:

- There are plenty of per-application command-line uploader tools.
- These could just be put in a shell script.
- This is really difficult to design for very little benefit.

Released under an MIT license.

## Architecture

There _must_ be a configuration file, because there are too many per-module
contingencies, such as AWS secrets for S3 buckets, that cannot be supplied
via command-line options. Then again, this could be said for inputs too.

This is a stupid project.

- Input Plugins
  - Add protocols to the input URI
  - Generate this data structure:
    - Data: `Buffer`
    - Source URI: `string`
    - Extra properties: `any`
  - Examples:
    - Files (`file`)
    - Environment variables (`env`)
    - HTTP (`http`)
- Processing Plugins ()
  - All data outputs are ran through each processing plugin.
  - The processing plugin manipulates the data in some way
  - Examples:
    - Zipper
    - Encrypter
    - Hasher
    - Hexer
    - Base64
    - PEMer
    - InternetMessage-ify
- Output Plugins
  - AWS S3 (`s3`)
  - Azure Blob Store (`azblob`)
  - Google Cloud Storage (`gcs`)
  - Email Address (`email`)
  - Twitter (`twitter`)
  - Gab.ai (`gab`)
  - HTTP POST (`http`)
  - FTP (`ftp`)
  - SCP (`scp`)
  - Blockchain?

## Usage

scattergun
scattergun {input uri} (This will use all pipelines)
scattergun {input uri} -P {pipeline name}
scattergun {input uri} \[-p {processing modules}\] \[output uris...\]