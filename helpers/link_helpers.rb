module LinkHelpers
  def nav_link_to(path, text, klass)
    classes = klass
    classes << " #{klass}--active" if current_page.path.sub(/\/index.*/, '') == path.tr('/', '')
    link_to(text, path, class: classes)
  end
end
