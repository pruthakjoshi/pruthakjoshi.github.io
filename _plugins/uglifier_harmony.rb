require 'uglifier'

module Jekyll
  class Minifier
    def self.js_compressor
      Uglifier.new(harmony: true)
    end
  end
end
